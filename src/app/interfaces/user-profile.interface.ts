export interface IUserProfile {
  firstName: string;
  lastName: string;
  phones: string[];
  address: {
    country: string;
    city: string;
    state: string;
    street: string;
    zip?: string;
  }
}
