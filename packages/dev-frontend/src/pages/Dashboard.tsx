import { Container, Flex, Image, Paragraph } from "theme-ui";

import { Trove } from "../components/Trove/Trove";
import { Stability } from "../components/Stability/Stability";
import { SystemStats } from "../components/SystemStats";
import { PriceManager } from "../components/PriceManager";
import { Staking } from "../components/Staking/Staking";
import { BondsTable } from "../components/Bonds/BondsTable";
import { useState } from "react";
import { Opening } from "../components/Trove/Opening";

export const Dashboard: React.FC = () => {
      const [tabActive, setTabActive] = useState<string>('strove')

      return (
            <Container variant="columns">
                  <Container variant="left" py={'20px'} px={'40px'} sx={{ background: 'linear-gradient(143deg, rgba(10, 10, 13, 0.41) 0%, rgba(58, 53, 82, 0.34) 100%)' }}>
                        <Flex sx={{ width: '100%', justifyContent: 'center', background: '#161619' }} mt={4} py={'8px'}>
                              <Flex sx={{
                                    flexGrow: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', cursor: 'pointer',
                                    background: `${tabActive === 'strove' ? 'linear-gradient(143deg, rgba(10, 13, 10, 0.50) 0%, rgba(10, 10, 13, 0.26) 0.01%, rgba(19, 255, 156, 0.06) 100%)' : 'transparent'}`,
                                    borderBottom: `2px solid ${tabActive === 'strove' ? '#8EE8A0' : 'transparent'}`
                              }} onClick={() => setTabActive('strove')}>
                                    <Image src={`${tabActive === 'strove' ? './icons/dashboardIconFill.svg' : './icons/dashboardIcon.svg'}`} sx={{ width: 24, height: 24 }} />
                                    <Paragraph sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 500, color: tabActive === 'strove' ? '#8EE8A0' : 'white' }}>
                                          strove
                                    </Paragraph>
                              </Flex>
                              <Flex sx={{
                                    flexGrow: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', cursor: 'pointer',
                                    background: `${tabActive === 'sabilitypool' ? 'linear-gradient(143deg, rgba(10, 13, 10, 0.50) 0%, rgba(10, 10, 13, 0.26) 0.01%, rgba(19, 255, 156, 0.06) 100%)' : 'transparent'}`,
                                    borderBottom: `2px solid ${tabActive === 'sabilitypool' ? '#8EE8A0' : 'transparent'}`
                              }} onClick={() => setTabActive('sabilitypool')}>
                                    <Image src={`${tabActive === 'sabilitypool' ? './icons/dashboardIconFill.svg' : './icons/dashboardIcon.svg'}`} sx={{ width: 24, height: 24 }} />
                                    <Paragraph sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 500, color: tabActive === 'sabilitypool' ? '#8EE8A0' : 'white' }}>
                                          Sability Pool
                                    </Paragraph>
                              </Flex>
                              <Flex sx={{
                                    flexGrow: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', cursor: 'pointer',
                                    background: `${tabActive === 'staking' ? 'linear-gradient(143deg, rgba(10, 13, 10, 0.50) 0%, rgba(10, 10, 13, 0.26) 0.01%, rgba(19, 255, 156, 0.06) 100%)' : 'transparent'}`,
                                    borderBottom: `2px solid ${tabActive === 'staking' ? '#8EE8A0' : 'transparent'}`
                              }} onClick={() => setTabActive('staking')}>
                                    <Image src={`${tabActive === 'staking' ? './icons/dashboardIconFill.svg' : './icons/dashboardIcon.svg'}`} sx={{ width: 24, height: 24 }} />
                                    <Paragraph sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 500, color: tabActive === 'staking' ? '#8EE8A0' : 'white' }}>
                                          Staking
                                    </Paragraph>
                              </Flex>
                        </Flex>
                        {/* <BondsTable /> */}
                        {
                              tabActive === 'strove ' ?
                                    <>
                                          test
                                    </> : tabActive === 'staking ' ?
                                          <>
                                                staking
                                          </> : <>
                                          null
                                          </>
                        }

                        <Trove />
                        <Stability />
                        <Staking />
                  </Container>

                  <Container variant="right">
                        <SystemStats />
                        <PriceManager />
                  </Container>
            </Container>
      );
}

