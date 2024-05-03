const isPangram = (string) => {
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toLowerCase()) {
      if (/[a-z]/.test(ch)) {
          result.add(ch)
      }
    }
    return result.size === 26
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram(12356));
  console.log(isPangram("I like cats, but not mice"));
  console.log(isPangram("Waltz, bad nymph, for quick jigs vex."))