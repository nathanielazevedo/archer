import { web, mobile, creator } from "./assets";

export const constants = {
  marketingGraph: [
    {
      name: "5/10",
      main_ranch: 4,
    },
    {
      name: "5/17",
      main_ranch: 6,
    },
    {
      name: "5/24",
      main_ranch: 4,
    },
    {
      name: "5/31",
      main_ranch: 5,
    },
    {
      name: "6/7",
      main_ranch: 7,
    },
    {
      name: "6/14",
      main_ranch: 5,
    },
    {
      name: "6/21",
      main_ranch: 6,
    },
  ],
  marketingCards: [
    {
      title: "Install",
      description:
        "Install Archer in your field. Archer is solar powered and completely wireless. No need to run power or ethernet cables.",
      icon: web,
    },
    {
      title: "Connect",
      description:
        "Connect Archer to your network. Archer will send you notifications when your irrigation is done.",
      icon: mobile,
    },
    {
      title: "Retrieve",
      description:
        "Retrieve your Archer from the field. Archer will send you a notification when it's battery is low.",
      icon: creator,
    },
  ],
};
