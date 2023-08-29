import React from "react";
import {Box, Flex } from "theme-ui";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Wallet } from "@ethersproject/wallet";

import { Decimal, Difference, Trove } from "@sim/lib-base";
import { SimStoreProvider } from "@sim/lib-react";

import { useSim } from "./hooks/SimContext";
import { TransactionMonitor } from "./components/Transaction";
import { UserAccount } from "./components/UserAccount";
import { SystemStatsPopup } from "./components/SystemStatsPopup";
import { Header } from "./components/Header";

import { PageSwitcher } from "./pages/PageSwitcher";
import { RiskyTrovesPage } from "./pages/RiskyTrovesPage";

import { TroveViewProvider } from "./components/Trove/context/TroveViewProvider";
import { StabilityViewProvider } from "./components/Stability/context/StabilityViewProvider";
import { StakingViewProvider } from "./components/Staking/context/StakingViewProvider";
import "tippy.js/dist/tippy.css";
import { BondsProvider } from "./components/Bonds/context/BondsProvider"; // Tooltip default style
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./components/Navbar";
import { HeaderMobile } from "./components/Dashboard/HeaderMobile";

type SimFrontendProps = {
  loader?: React.ReactNode;
};
export const SimFrontend: React.FC<SimFrontendProps> = ({ loader }) => {
  const { account, provider, sim } = useSim();

  // For console tinkering ;-)
  Object.assign(window, {
    account,
    provider,
    sim: sim,
    Trove,
    Decimal,
    Difference,
    Wallet
  });

  return (
    <SimStoreProvider {...{ loader }} store={sim.store}>
      <Router>
        <TroveViewProvider>
          <StabilityViewProvider>
            <StakingViewProvider>
              <BondsProvider>
                <Flex sx={{ flexDirection: "column", minHeight: "100%", background: "#000" }}>
                  <Switch>
                    <Route path="/" exact>
                      <LandingPage />
                    </Route>
                    <Flex>
                      <Navbar />
                      <Flex
                        sx={{
                          flexGrow: 1,
                          flexDirection: "column",
                          background: "#000 url(./images/mainbg.png) no-repeat",
                          backgroundPosition: "bottom",
                          backgroundSize: "680 100%",
                          marginLeft: [0, "281px"]
                        }}
                      >
                        <Flex
                          sx={{
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100vh",
                            overflow: "auto"
                          }}
                        >
                          <HeaderMobile/>
                          <Header>
                            {/* <SystemStatsPopup /> */}
                            <UserAccount />
                          </Header>
                          <Route path="/dashboard" exact>
                            <PageSwitcher />
                          </Route>
                          <Route path="/risky-troves">
                            <RiskyTrovesPage />
                          </Route>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Switch>
                </Flex>
              </BondsProvider>
            </StakingViewProvider>
          </StabilityViewProvider>
        </TroveViewProvider>
      </Router>
      <TransactionMonitor />
    </SimStoreProvider>
  );
};
