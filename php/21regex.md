# Regular Expressions

## literals

characters to match exactly

## or

`cat|dog` matches both "cat" and "dog"

## character sets
`[chr]at` matches "cat", "hat", "rat"

## wild cards
`....\.` will match "bear.", "lion." but not "mouse", "chair"

## ranges
`[b-h]at` matches "bat", "cat", "hat" but not "mat"

## ready made classes

`\w`: the “word character” class represents the regex range [A-Za-z0-9_], and it matches a single uppercase character, lowercase character, digit or underscore
`\d`: the “digit character” class represents the regex range [0-9], and it matches a single digit character
`\s`: the “whitespace character” class represents the regex range [ \t\r\n\f\v], matching a single space, tab, carriage return, line break, form feed, or vertical tab

Capitalise to negate these. eg: `\W`: the “non-word character” class represents the regex range [^A-Za-z0-9_]

## repeats
`\d.*` matches "1 dog", "9 hats" but not "Sam70"

## grouping
`th(is|at)` matches "this" or "that"

## quantifiers
`squea{3,5}k` matches 3, 4 or 5 `a`'s, but not 1, 2 or 6 etc
`a*` matches zero or more a's
`a+` matches one or more a's
`hoo+t` will match 2 or more o's

## optional
`\d cat(s)?` matches "1 cat" and "2 cats" etc

## Anchors
`^` means beginning
`$` means at end