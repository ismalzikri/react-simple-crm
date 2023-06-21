type Client = {
  id: number;
  primary_person: {
    name: string;
    email: string;
    avatar: string;
  };
  company: {
    logo: string;
    name: string;
  };
  assigne: string;
  date_created: string;
  status: boolean;
};
