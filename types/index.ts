export type Product = {
  id: string;
  nom: string;
  slug: string;
  description: string;
  prix: number;       // en centimes ex: 2990 = 29,90€
  images: string[];   // URLs Firebase Storage
  stock: number;
  categorie: string;
  actif: boolean;
};

export type CartItem = {
  produit: Product;
  quantite: number;
};

export type UserProfile = {
  uid: string;
  email: string;
  nom: string;
};
