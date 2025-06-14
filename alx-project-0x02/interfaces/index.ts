  export interface CardProps {
    title: string;
    content: string;
    className?: string;
  }

  export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    label: string;
  }


  
  export interface PostProps {
    title: string;
    content: string;
    userId: number;
  }
  
  export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }
  