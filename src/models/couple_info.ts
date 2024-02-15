export type CoupleInfo = {
    name: string,
    dadName: string,
    momName: string,
    address: string,
    image?: string
};

export const coupleInfos: CoupleInfo[] = [
    {
        name: "Phạm Quang Hoà",
        dadName: "Phạm Quang Điện",
        momName: "Đỗ Thị Hương",
        address: "Như Quỳnh, Văn Lâm, Hưng Yên",
        image: "/assets/images/couple/2.jpg"
    },
    {
        name: "Kiều Trang",
        dadName: "Kiều Đức Thành",
        momName: "Đỗ Thị Thìn",
        address: "Trưng Trắc, Văn Lâm, Hưng Yên",
        image: "/assets/images/couple/1.jpg"
    },
]