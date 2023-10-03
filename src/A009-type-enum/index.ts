enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}
enum Colors {
  ROXO = 'ROXO',
}

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.ROXO);
