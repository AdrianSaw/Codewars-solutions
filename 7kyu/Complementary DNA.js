function DNAStrand(dna){
  const dnaPairs = { 'A':'T', 'T':'A', 'G':'C', 'C':'G' }
  return dna.replace(/./g, sym => dnaPairs[sym]);
}