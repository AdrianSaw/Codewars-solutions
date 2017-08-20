for (var name in this) {
  if (typeof this[name] === 'number') {
    Bomb.CutTheWire(this[name]);
  }
}