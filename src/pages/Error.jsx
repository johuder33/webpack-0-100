import Navigation from 'components/Navigation';
import Content from 'components/Content';
import Title from 'components/Title';
import Image from 'components/Image';
import ErrorImage from 'assets/images/404.png';

const Error = () => (
  <>
    <Navigation
      links={[
        { label: 'My Page', to: '/' },
        { label: 'About me', to: '/about' }
      ]}
    />
    <section className="section">
      <Title>Ops... are you lost ?</Title>
      <Content>
        <Image src={ErrorImage} alt="404 image" />
        <Image src={ErrorImage} alt="404 image" size="medium" />
        <Image src={ErrorImage} alt="404 image" size="large" />
        <Image src={ErrorImage} alt="404 image" size="medium" />
        <Image src={ErrorImage} alt="404 image" />
      </Content>
    </section>
  </>
);

export default Error;
