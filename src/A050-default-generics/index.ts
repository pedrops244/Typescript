// Record
const obj1: Record<string, string | number> = {
  nome: 'Pedro',
  sobrenome: 'Souza',
  idade: 30,
};
console.log(obj1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};
// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const obj2: PessoaRequired = {
  nome: 'Pedro',
  sobrenome: 'Souza',
  idade: 30,
};
console.log(obj2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'h27218sh8a',
  nome: 'Pedro',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
