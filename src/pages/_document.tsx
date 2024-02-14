import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <link href="assets/css/themify-icons.css" rel="stylesheet"/>
        <link href="assets/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="assets/css/flaticon.css" rel="stylesheet"/>
        <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="assets/css/animate.css" rel="stylesheet"/>
        <link href="assets/css/swiper.min.css" rel="stylesheet"/>
        <link href="assets/css/nice-select.css" rel="stylesheet"/>
        <link href="assets/css/magnific-popup.css" rel="stylesheet"/>
        <link href="assets/css/jquery.fancybox.css" rel="stylesheet"/>
        <link href="assets/css/odometer-theme-default.css" rel="stylesheet"/>
        <link href="assets/css/jquery-ui.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
