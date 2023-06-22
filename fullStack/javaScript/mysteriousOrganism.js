// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum, dna,
    mutate() {
      let n = this.dna.length
      let base = Math.floor(Math.random() * n)
      let cur = this.dna[base]
      let newVal = cur;
      while (newVal === cur) {newVal = returnRandBase()}
      this.dna[base] = newVal
      return this.dna
    },
    compareDNA(other) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === other.dna[i]) {count++}
      }
      console.log(`Specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${100*count/15}% in common.`)
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {count++}
      }
      return (count/15) >= 0.6
    }
  }
}

let zoo = []
for (let i = 0; i < 30; i++) {zoo.push(pAequorFactory(i, mockUpStrand()))}

console.log(zoo[0].willLikelySurvive())
zoo[10].compareDNA(zoo[3])