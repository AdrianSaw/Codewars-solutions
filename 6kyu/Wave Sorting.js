function waveSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i])
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    if (i < n - 1 && arr[i] < arr[i + 1])
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
}