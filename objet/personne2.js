class Personne2
{
    constructor(nom,prenom,age,adresse)
    {
        this.nom = nom;
        this.prenom =prenom;
        this.age = age;
        this.adresse = adresse;
    }

    majNom()
    {
        console.log(this.nom.toUpperCase());
    }

    diplome(nomDiplome)
    {
        console.log(nomDiplome);
    }
}

let p1 = new Personne2('paul','Dupond',25,'11 rue consolat Marseille');
p1.majNom();
p1.diplome('BTS informatique');