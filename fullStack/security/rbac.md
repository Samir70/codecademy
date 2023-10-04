# RBAC Role based access control

The Principle of Least Privilege is another important principle for RBAC, and access control in general! Essentially, the principle says that users should have only the permissions necessary to accomplish their tasks, and no more. For example, most users within an organization won’t need access to their computer’s terminal and therefore should not be able to access it.

The principle of least privilege often goes hand-in-hand with default-deny schemas, where privileges are denied by default and must be explicitly granted to be used. 

```sql
CREATE ROLE role_name [options];
GRANT PERMISSION ON table TO role;
GRANT first_role TO second_role;
-- which assigns the permissions of the first role to the second role
```

## Server Configuration: `postgresql.conf File`

The `listen_addresses` parameter controls what IP addresses are allowed to connect to the server. An IP address that isn’t allowed to connect won’t even be able to try to authenticate. Setting this to '*' allows connections from any address to try and authenticate, but this is generally a bad idea! This parameter supports CIDR notation, and can have multiple entries separate by commas.

`Port` numbers 49152—65535 aren’t reserved by any software, so a port in this range usually doesn’t conflict with any other software

The `ssl` parameter determines whether or not the server will support SSL connections. In a real environment, the server also needs to be provided with the appropriate certificate and key.


```conf
listen_addresses = 'localhost, 104.20.25.250'
port = 54831
ssl = on
```

`pg_hba.conf` File configures host-based authentication

```conf
# entry format
connection_type  db  user  address  auth_method  [auth_options]


# example entry
# the + matches users in the group rather than the group itself. A single user wouldn't need the +
# samenet means on the same subnet as the server. Can give an IP address
hostssl  db_example  +g_example  samenet  scram-sha-256
host db_customers +g_employees samenet scram-sha-256
host db_employees +g_hr samenet scram-sha-256
hostssl all u_owner 104.20.25.250 scram-sha-256
# put default reject at end, so last checked
host all all all reject
```

## Setting up permission system

```bash
$ CREATE ROLE p_customers_read;
$ GRANT SELECT ON customers TO p_customers_read;
$ CREATE ROLE g_employees;
$ GRANT p_customers_read TO g_employees;
$ CREATE ROLE u_example WITH LOGIN;
$ GRANT g_employees TO u_example;
$ REVOKE SELECT ON customers FROM PUBLIC;
```