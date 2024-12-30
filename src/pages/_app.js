import { MantineProvider } from '@mantine/core';
import 'common/assets/css/flaticon.css';
import '../containers/CryptoModern/CountDown/timer.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import 'common/assets/css/rc-drawer.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function CustomApp({ Component, pageProps }) {
  return (
      <MantineProvider>
        <FloatingWhatsApp messageDelay={2} notificationSound={true}notificationDelay={0} notification={true} phoneNumber={"50686959870"} accountName={"irule center"} statusMessage={"Nice to meet you!"} chatMessage={"Feel free to ask any questions!"} placeholder={"Hi, I'm interested in a website."} chatboxHeight={500}/>
        <Component {...pageProps} />
      </MantineProvider>
  );
}
