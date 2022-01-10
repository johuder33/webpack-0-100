import Navigation from 'components/Navigation';
import Content from 'components/Content';
import Title from 'components/Title';
import Image from 'components/Image';
import CartoonImage from 'assets/images/cartoon.png';

const Home = () => (
  <>
    <Navigation
      links={[
        { label: 'My Page', to: '/' },
        { label: 'About me', to: '/about' },
        { label: 'Woohoo' },
      ]}
    />
    <section className="section">
      <Title>Webpack from 0 to 100</Title>
      <Content>
        <Image src={CartoonImage} alt="cartoon image" />
        <Image src={CartoonImage} alt="cartoon image" size="medium" />
        <Image src={CartoonImage} alt="cartoon image" size="large" />
        <p>Hello this is my first simple webapp using webpack from scratch woohoo 😃</p>
      </Content>
    </section>
  </>
);

export default Home;
