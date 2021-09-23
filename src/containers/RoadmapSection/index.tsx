import React from 'react'
import styles from './RoadmapSection.module.css'
import roadTitle from '../../assets/Roadmap/titleBg.png'
import titleDecor from '../../assets/Roadmap/titleDecor.png'
import roadDecor from '../../assets/Roadmap/roadDecor.png'
import worldBuilding from '../../assets/Roadmap/worldBuilding.png'
import arrow from '../../assets/Roadmap/arrow.png'
import presaleNFT from '../../assets/Roadmap/presaleNFT.png'
import airdrop from '../../assets/Roadmap/airdrop.png'
import tokenomics from '../../assets/Roadmap/tokenomics.png'
import gameLaunch from '../../assets/Roadmap/gameLaunch.png'
import upgrade from '../../assets/Roadmap/upgrade.png'

const RoadmapSection = () => {
  return (
    <div className={styles.sectionContainer} id="roadmap">
      <div className={styles.sectionWrapper}>
        <div className={styles.titleWrap}>
          <img src={roadTitle} alt="title background" className={styles.titleBackground} />
          <img src={titleDecor} alt="title decoration" className={styles.titleDecoration} />
          <span className={styles.title}>
            Road map
          </span>
        </div>

        <div className={styles.descriptionBox}>
          <div className={styles.imgContainer}>
            <img src={worldBuilding} alt="worldBuilding" className={styles.leftImg} />
            <img src={arrow} alt="arrow" className={styles.arrowImg} />
          </div>
          <div className={styles.descriptionText}>
            <span className={styles.subTitle}>
              Worldbuilding and development
            </span>
            <span className={styles.text}>
              Upon developing the idea of Sanctum, we quickly organized and began building.
              We really wanted to do something that uniquely incorporates defi -
              but also something that we can build a truly fun game around.
            </span>
          </div>
        </div>

        <div className={styles.descriptionBox}>
          <img src={arrow} alt="arrow" className={styles.mobileArrowImg} />
          <div className={styles.imgContainer}>
            <img src={presaleNFT} alt="presale NFT" className={styles.leftImg} />
            <img src={arrow} alt="arrow" className={styles.arrowImg} />
          </div>
          <div className={styles.descriptionText}>
            <span className={styles.subTitle}>
              NFT Presale
            </span>
            <span className={styles.text}>
              To recoup development costs, pay for future development,
              and seed liquidity: we will be raising funds through an NFT drop.
              Information on the metrics and method will be released beforehand.
            </span>
          </div>
        </div>

        <div className={styles.descriptionBox}>
          <img src={arrow} alt="arrow" className={styles.mobileArrowImg} />
          <div className={styles.imgContainer}>
            <img src={airdrop} alt="airdrop" className={styles.leftImg} />
            <img src={arrow} alt="arrow" className={styles.arrowImg} />
          </div>
          <div className={styles.descriptionText}>
            <span className={styles.subTitle}>
              Token listing & airdrop
            </span>
            <span className={styles.text}>
              We will airdrop initial token supply across all NFT holders,
              and seed liquidity before the game launch.
              We want to be sure to reward early supports,
              while still not giving away too much of the supply right away.
            </span>
          </div>
        </div>

        <div className={styles.descriptionBox}>
          <img src={arrow} alt="arrow" className={styles.mobileArrowImg} />
          <div className={styles.imgContainer}>
            <img src={tokenomics} alt="tokenomics" className={styles.leftImg} />
            <img src={arrow} alt="arrow" className={styles.arrowImg} />
          </div>
          <div className={styles.descriptionText}>
            <span className={styles.subTitle}>
              Tokenomics reveal
            </span>
            <span className={styles.text}>
              A huge part of why we decided to build Sanctum was an idea for the game economy that we hadn’t seen executed before.
              We will reveal this just before launch, and are confident it will be well received!
            </span>
          </div>
        </div>

        <div className={styles.descriptionBox}>
          <img src={arrow} alt="arrow" className={styles.mobileArrowImg} />
          <div className={styles.imgContainer}>
            <img src={gameLaunch} alt="game Launch" className={styles.leftImg} />
            <img src={arrow} alt="arrow" className={styles.arrowImg} />
          </div>
          <div className={styles.descriptionText}>
            <span className={styles.subTitle}>
              Game launch
            </span>
            <span className={styles.text}>
              Shortly after the reveal, and airdrop: we will launch the game for everyone to play.
              There will be plenty of information circulating on how to play beforehand,
              but also some mysteries to discover within.
            </span>
          </div>
        </div>

        <div className={styles.descriptionBox}>
          <img src={arrow} alt="arrow" className={styles.mobileArrowImg} />
          <div className={styles.imgContainer}>
            <img src={upgrade} alt="upgrade" className={styles.leftImg} />
          </div>
          <div className={styles.descriptionText}>
            <span className={styles.subTitle}>
              Future game updates
            </span>
            <span className={styles.text}>
              The sky is the limit with blockchain gaming, and we hope to be building this game for years to come.
              We have many ideas internally on the direction of the game,
              but also we plan to engage the community and consider their ideas as much as possible.
              After the initial launch, we will immediately continue development on the combat system of the game,
              steadily releasing updates for players, all culminating in the first major update: adding PvP.
              After that, there’s so much we can do: housing, city management / ownership, PvE...
            </span>
          </div>
        </div>

        <img src={roadDecor} alt="decoration" className={styles.lastSectionImg} />

      </div>
    </div>
  )
}

export default RoadmapSection
