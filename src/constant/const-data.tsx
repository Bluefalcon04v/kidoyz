import {
    ActionFigureSvg,
    RemoteCarsSvg,
    BoardGameSvg,
    MusicGameSvg,
    BlockSetSvg,
    StuffToySvg,
    GunToySvg,
    PlaySvg,
} from "@/../public/svg";
import { SRBImg1, SRBImg2, SRBImg3 } from "@/../public/images";

export const CATEGORY_ITEMS = [
    {
        icon: <PlaySvg />,
        title: "Pretend & Play",
        link: "/pretend-&-play",
    },
    {
        icon: <RemoteCarsSvg />,
        title: "Remote control cars",
        link: "/remote-control-cars",
    },
    {
        icon: <ActionFigureSvg />,
        title: "Action Figures",
        link: "/action-figures",
    },
    {
        icon: <BlockSetSvg />,
        title: "Blocks & Construction Sets",
        link: "/block-&-construction-sets",
    },
    {
        icon: <GunToySvg />,
        title: "Gun Toys",
        link: "/gun-toys",
    },
    {
        icon: <StuffToySvg />,
        title: "Soft Toys",
        link: "/soft-toys",
    },
    {
        icon: <BoardGameSvg />,
        title: "Board Games",
        link: "/board-games",
    },
    {
        icon: <MusicGameSvg />,
        title: "Music Games",
        link: "/music-games",
    },
];

export const SHOP_BY_REEL_DATA = [
    {
        image: SRBImg1,
        title: "Dino Lunch boxes",
        sellingPrice: "15,000",
        actualPrice: "18,000",
    },
    {
        image: SRBImg2,
        title: "Wooden Dressing Pink & White",
        sellingPrice: "18,000",
        actualPrice: "20,000",
    },
    {
        image: SRBImg3,
        title: "Burger cafe Toy Playhouse",
        sellingPrice: "1,000",
        actualPrice: "2,000",
    },
    {
        image: SRBImg1,
        title: "Mini Bag",
        sellingPrice: "5,000",
        actualPrice: "8,000",
    },
    {
        image: SRBImg3,
        title: "Wooden Dressing Pink & White",
        sellingPrice: "10,000",
        actualPrice: "12,000",
    },
];
