import { internet, name } from 'faker';

export type LoaderData = {
  code: number;
  data: {
    name: string;
    avatar: string;
    email: string;
    archived?: boolean;
  }[];
};

export const loader = async (): Promise<LoaderData> => {
  const data = new Array(20).fill(0).map(() => {
    const firstName = name.firstName();
    return {
      name: firstName,
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,
      email: internet.email(),
      archived: false,
    };
  });

  return {
    code: 200,
    data,
  };
};
