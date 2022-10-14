import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 25px;
  color: gray;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0;
  list-style: none;
  color: gray;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  /* width: 50%; */
  margin-bottom: 10px;
`;
const Footer = () => {
  return (<>
  <div style={ {
     marginTop:'30px',
     marginBottom:'0',
     border:'0',
     height:'1px',
     backgroundColor:"gray",
}}></div>
    <Container>
      <Center>
        <Title>Technology</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Stack Overflow</ListItem>
          <ListItem>Server Built</ListItem>
          <ListItem>Super User</ListItem>
          <ListItem>Web applcations</ListItem>
          <ListItem>Ask Ubuntu</ListItem>
          <ListItem>Webmasters</ListItem>
          <ListItem>Game development</ListItem>
          <ListItem>Task-LaTeX</ListItem>
        </List>
      </Center>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Programmers</ListItem>
          <ListItem>Unix & Linux</ListItem>
          <ListItem>Ask different(Apple)</ListItem>
          <ListItem>WordPress Development</ListItem>
          <ListItem>Geographic Information System</ListItem>
          <ListItem>Electrical Engineering</ListItem>
        </List>
      </Center>

      <Center>
      <Title>Technology</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Stack Overflow</ListItem>
          <ListItem>Server Built</ListItem>
          <ListItem>Super User</ListItem>
          <ListItem>Web applcations</ListItem>
          <ListItem>Ask Ubuntu</ListItem>
          <ListItem>Webmasters</ListItem>
          <ListItem>Game development</ListItem>
          <ListItem>Task-LaTeX</ListItem>
        </List>
      </Center>

      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Programmers</ListItem>
          <ListItem>Unix & Linux</ListItem>
          <ListItem>Ask different(Apple)</ListItem>
          <ListItem>WordPress Development</ListItem>
          <ListItem>Geographic Information System</ListItem>
          <ListItem>Electrical Engineering</ListItem>
          <ListItem>Android Enthussiasts</ListItem>
          <ListItem>50+ more</ListItem>
        </List>
      </Center>

      <Center>
      <Title>Technology</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Stack Overflow</ListItem>
          <ListItem>Server Built</ListItem>
          <ListItem>Super User</ListItem>
          <ListItem>Web applcations</ListItem>
          <ListItem>Ask Ubuntu</ListItem>
          <ListItem>Webmasters</ListItem>
          <ListItem>Game development</ListItem>
          <ListItem>Task-LaTeX</ListItem>
        </List>
      </Center>

      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Programmers</ListItem>
          <ListItem>Unix & Linux</ListItem>
          <ListItem>Ask different(Apple)</ListItem>
          <ListItem>WordPress Development</ListItem>
          <ListItem>Geographic Information System</ListItem>
          <ListItem>Electrical Engineering</ListItem>
          <ListItem>Android Enthussiasts</ListItem>
          <ListItem>50+ more</ListItem>
        </List>
      </Center>

      <Center>
      <Title>Technology</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Stack Overflow</ListItem>
          <ListItem>Server Built</ListItem>
          <ListItem>Super User</ListItem>
        </List>
      </Center>

      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Programmers</ListItem>
          <ListItem>Unix & Linux</ListItem>
          <ListItem>Ask different(Apple)</ListItem>
          <ListItem>WordPress Development</ListItem>
          <ListItem>Geographic Information System</ListItem>
          <ListItem>50+ more</ListItem>
        </List>
      </Center>
    </Container>
    </>
  );
};

export default Footer;
