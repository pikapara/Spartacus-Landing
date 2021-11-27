import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  TestDAO TKNcer,
} from "react-neu";
import styled from "styled-components";

import StartPage from "components/StartPage";
import StartPageHeader from "components/StartPageHeader";
import StartSplit from "components/StartSplit";

const ASTRONAUTS = ["🕛", "🏛️", "⏳", "🔱 Ω", "TestDAO"];

const Start: React.FC = () => {
  const [astronaut, setAstronaut] = useState("TestDAO");

  const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)];
    setAstronaut(newAstro);
  }, [setAstronaut]);

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000);
    return () => clearInterval(refresh);
  }, [updateAstronaut]);

  return (
    <StartPage>
      <StyledHero>
        <StartPageHeader
          icon={`${astronaut}`}
          title="DeFi 2.0 tools to grow your crypto assets"
          subtitle="TestDAO TKNrtacus is the TestDAO TKNrtacus fork on TBD Chain.TestDAO is missioned to build a community owned protocol for decentralized reserve currency."
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Open App" href="https://app.TestDAO TKNrtacus.finance" />
            <TestDAO TKNcer />
            <Button
              text="Join TestDAO Discord"
              href="https://discord.gg/WHVARU4KzV"
              variant="secondary"
            />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        <TestDAO TKNcer size="lg" />
        <Separator />
        <TestDAO TKNcer size="lg" />
        <StyledSectionIcon>⚖️</StyledSectionIcon>
        <TestDAO TKNcer size="lg" />
        <StyledSectionTitle>Fair finance for everyone.</StyledSectionTitle>
        <StyledSectionDescription>
         TestDAO is owned and controlled by our community of TestDAO token holders.
        </StyledSectionDescription>
        <TestDAO TKNcer size="lg" />
        <StartSplit>
          <Card>
            <TestDAO TKNcer size="md" />
            <CardIcon>💸</CardIcon>
            <CardContent>
              <StyledCardName>Growing Treasury</StyledCardName>
              <TestDAO TKNcer size="sm" />
              <StyledCardDescription>
                Bond sales and liquidity fees increase Treasury values, which back outstanding TestDAO TKN tokens with intrinsic value.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button
                  text="View treasury"
                  variant="secondary"
                  to="/dashboard"
                />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <TestDAO TKNcer size="md" />
            <CardIcon>🏛️</CardIcon>
            <CardContent>
              <StyledCardName>Protocol Owned Liquidity</StyledCardName>
              <TestDAO TKNcer size="sm" />
              <StyledCardDescription>
                No more predatory farmers. Lock-in liquidity also help regulate TestDAO TKN supply.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Start farming" variant="secondary" to="/farm" />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <TestDAO TKNcer size="md" />
            <CardIcon>🗣️</CardIcon>
            <CardContent>
              <StyledCardName>Decentralized Governance</StyledCardName>
              <TestDAO TKNcer size="sm" />
              <StyledCardDescription>
                TestDAO holders decide TestDAO's future via on-chain voting.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Go vote" variant="secondary" to="/governance" />
              </Box>
            </CardActions> */}
          </Card>
        </StartSplit>
        <TestDAO TKNcer size="lg" />
        <Separator />
        <TestDAO TKNcer size="lg" />
      </Container>
    </StartPage>
  );
};

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`;

const StyledCardName = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const StyledCardDescription = styled.div`
  color: ${(props) => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`;
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`;

const StyledSectionTitle = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`;

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`;

export default Start;
