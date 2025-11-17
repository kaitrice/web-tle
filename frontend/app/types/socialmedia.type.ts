export type SocialMedia = {
    url: string;
    icon: string;
    alt: string;
    disabled: boolean
}

export type SocialUIProps = {
  data: SocialMedia;
  flag: boolean;
};