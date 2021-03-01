// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import SearchContactCard, { CardProps } from "./SearchContactCard";

export default {
  title: "SearchContactCard",
  component: SearchContactCard,
} as Meta;

const Template: Story<CardProps> = (args) => <SearchContactCard {...args} />;

export const ContactCard = Template.bind({});
ContactCard.args = {
  fullName: "Süleyman Barış Eser",
  userId: 123456,
  trust: 80,
  profileImageUrl: "https://randomuser.me/api/portraits/men/40.jpg",
};
