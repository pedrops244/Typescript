type VotationOption = {
  numberOfvotes: number;
  options: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOptions(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }
  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }
  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.options, votationOption.numberOfvotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programção favorita?');
votation1.addVotationOptions({ options: 'Python', numberOfvotes: 0 });
votation1.addVotationOptions({ options: 'Javascript', numberOfvotes: 0 });
votation1.addVotationOptions({ options: 'Ruby on Nails', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);

const votation2 = new Votation('Qual sua marca de carro favorita?');
votation2.addVotationOptions({ options: 'BMW', numberOfvotes: 0 });
votation2.addVotationOptions({ options: 'Audi', numberOfvotes: 0 });
votation2.addVotationOptions({ options: 'Mercedes', numberOfvotes: 0 });
votation2.vote(1);
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(2);
votation2.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);
votationApp.showVotations();
