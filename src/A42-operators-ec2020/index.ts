type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Aurora',
  texto: 'lorem ipusum',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data!');
