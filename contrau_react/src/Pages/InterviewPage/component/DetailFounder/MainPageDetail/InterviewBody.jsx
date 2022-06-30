import React from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";

import imagequote from "../../../../../assets/interview-img/imagequote.png";
import imagequotemb from "../../../../../assets/interview-img/imagequote-mb.png";
import imagearticle from "../../../../../assets/interview-img/imagearticle.png";
import imgarticle1 from "../../../../../assets/interview-img/imgarticle1.png";
import imgarticle2 from "../../../../../assets/interview-img/imgarticle2.png";
import imgarticle1mb from "../../../../../assets/interview-img/imgarticle1mb.png";
import imgarticle2mb from "../../../../../assets/interview-img/imgarticle2mb.png";
import imagearticlemobile from "../../../../../assets/interview-img/imagearticlemobile.png";
import new1 from "../../../../../assets/interview-img/new1.png";
import new2 from "../../../../../assets/interview-img/new2.png";
import new3 from "../../../../../assets/interview-img/new3.png";
import new1mb from "../../../../../assets/interview-img/new1mb.png";
import new2mb from "../../../../../assets/interview-img/new2mb.png";
import new3mb from "../../../../../assets/interview-img/new3mb.png";
InterviewBody.propTypes = {
  detailArticle: PropTypes.object,
};

function InterviewBody({ detailArticle }) {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  var test1 = `
  <div class="framearticle">
    <div class="framehtmlinterview">
      <div class="frameimagequote">
        <img />
      </div>
      <div class="framearticle">
        <div class="detailarticle">
          Just three years after its release, app revenue has given them a
          boost.G writers reach 20 million a month. In 2022, bTaskee broke
          its own record when the income of bee sisters reached three.0
          million a month.
          <p>
            He graduated from the University of Waterloo, one of the best
            universities in the world.i Canada on training software
            engineers. Attractive job invitations with tens of thousands of
            dollars in income from companies and corporations.In a country
            with autumn leaves, it seems like everyone's dream. But it
            wasn't the final destination on the way to find the young
            engineer's ideal of life in any year. Something that always
            motivates you. make one's own mark, giving one's own impression
            It's different for society in Vietnam.
          </p>
          <div>
            Starting a business has always been a long and demanding path
            for you. Flexible for travelers who want to start it. To go far
            and sustainably requires that we prepare for the second act.c is
            strong enough in areas that want to start a business and the
            prerequisite is to persevere until the end.
          </div>
        </div>
      </div>
      <div class="frameimg">
        <img alt="" />
        <p>Co Founder and collaborator from bTaskee</p>
      </div>
    </div>

    <div class="framequestionmain">
      <div class="frametitle">
        <div class="detailtitle">
          BTaskee is currently the
          <span class="detailtitlered">&nbsp;first place</span>in Vietnam
          to&nbsp;
          <span class="detailtitlered">grant a degree</span>&nbsp;
          <span>
            in housework to demonstrate their ability and attitude to work.
          </span>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          What is the application
          <span>&nbsp;idea for bTaskee?</span>
        </div>
        <div class="articlequestion">
          <p>
            Oh, me? I started another business before bTaskee, but it didn't
            work. Public. Then he realized that the economic potential in
            Vietnam was great because he was a developing country. But the
            gap between rich and rich.It was a matter of concern at that
            time. Many people want to create applications and services for
            financially wealthy people, but workers are always busy with
            life.What about you? They don't have the right to choose what
            they want.What, what do I do?
          </p>
          <p style={{ marginTop: "50px" }}>
            Some cannot even afford to send their children to school,
            especially single mothers. I want to help them realize the value
            of what they are doing and the potential for career development.
            That's the driving force behind his idea of starting a business.
          </p>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          You mentioned that you failed to start a business. After that,
          <span>What kind of fortune</span>&nbsp;did you bring back for your
          next journey?
        </div>
        <div class="articlequestion">
          <p>
            In 2006, he started writing software for Saas Base.ERVICE and
            cloud computing help businesses manage data more securely,
            cost-effective, but he realized at the time that productivity
            was low.My m was so new, most small and medium-sized businesses
            were not ready for SaaS at the time, and it took a lot of time
            and resources to change consumer thinking because it was a
            fairly new concept.However, thanks to this failure, I got the
            time. You slowly look back on everything and realize that you
            don't have to start with technology that's so new, there's
            always some aspects that are already there, that if you apply
            technology to that field, you can produce unexpected results.
          </p>
        </div>
      </div>
      <div class="frameimgarticle">
        <div class="frameimgarticle1">
          <img alt="" />
        </div>
        <div class="frameimgarticle2">
          <img alt="" />
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          What was the
          <span>&nbsp;hardest thing you had to go through&nbsp;</span>
          when you chose to start a business?
        </div>
        <div class="articlequestion">
          <p>
            I think it's faith. The first is my belief.i with the goal of
            starting a business. Around the time I got home, I shared my
            ideas with my middle and high school friends. Most people find
            the project quite interesting and new, but 10 people would
            probably advise him not to (smile) because it's hard to change
            the way workers think and behave. However, you are quite a
            patient person. I'd like to get opinions from all sides.There
            are more diverse views on one issue, but you will stick to your
            decision until the end. The second is his belief in the workers.
            One sentence. If you don't trust them, who's going to do it? I
            have to give them the feeling of listening, of being trusted, of
            being respected.If anything happens, I'm sure they'll trust me
            and do their best for this job. Photo: bTaskee participating in
            Saigon Tech Startup Fest in 2016
          </p>
        </div>
      </div>
    </div>

    <div class="framequestionmain">
      <div class="frametitle">
        <div class="detailtitle">
          BTaskee is currently the
          <span class="detailtitlered">&nbsp;first place&nbsp;</span> in
          Vietnam to&nbsp;
          <span class="detailtitlered">grant a degree</span>&nbsp;
          <span>
            in housework to demonstrate their ability and attitude to work.
          </span>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          What did you&nbsp;
          <span>get and lose&nbsp;</span>
          when you chose to start a business?
        </div>
        <div class="articlequestion">
          <p>
            I think I'll get more. You get to live and work in the United
            States. My childhood passion is software technology. Above all,
            you can create very meaningful values for the community. This
            profession has helped many people earn better income to cover
            their lives and gave them a different perspective on their
            profession. Many "bee sisters" who joined bTaskee no longer
            watch help.Ha is another "living profession" that for them is
            future career orientation and is really proud of it.
          </p>
          <p class="detailarticle2">
            He is also happy that he can build a team with corporate
            development mindset to improve the lives of others, not for
            profit or sales. For him, it's always more fun to talk about his
            inner comfort than how much money he earns. And of course, there
            must be a trade-off for every decision. When you came back to
            Vietnam at that time, you were quite worried about what your new
            life would be like? You have to abandon all your habits, better
            job opportunities in Canada, accept your safety and return.
            However, if you send me back six years ago, I'll still choose to
            start a business because I know what I need.
          </p>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          What made
          <span>&nbsp; bTaskee really different?</span>
        </div>
        <div class="articlequestion">
          <p>
            First of all, it is the true value of bTaskee to customers and
            collaborators. About 70 percent of users know and use the app
            because of their acquaintances' recommendations. The word of
            mouth effect has helped us grow quite quickly in our worship, in
            part confirming our customer's perception.Just now.
          </p>
          <p class="detailarticle2">
            For collaborators, bTaskee is a community of professional
            helpers who are always willing to help each other, as well as
            the highest income, most comfortable in terms of working hours.
            Here, Ong sisters are communicated, shared and listened to to
            grow together. There are a lot of functions and policies on the
            app that are made through listening and understanding.This
            tumor.
          </p>
        </div>
      </div>

      <div class="frameimgarticle">
        <div class="frameimgarticle3">
          <img alt="" />
          <p> Ong sisters attending the gala bTaskee </p>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="articlequestion">
          <p>
            Sincerity is the second factor to tell the difference in
            bTaskee. Quality of service, customer experience, and partner
            income are indicators of best interest, not profitability.
          </p>
          <p>
            Collaborators can count the amount of money customers have to
            pay, the amount they receive per job, all detailed and
            transparent. Each response on the application (from customers or
            collaborators) is addressed by real-world action, such as
            training programs from scratch.n to enhancements are digitized
            to help collaborators learn directly from applications when they
            have time. In addition, bTaskee always offers free advanced
            training classes and is the first company to grant a degree for
            housework. In addition, the company holds monthly awards, Golden
            Ong, Silver Ong, and Top 100 awards every year, holding year-end
            gala performances and efforts. Ong bTaskee's efforts to make it
            more concrete.the perspective of a housekeeper.
          </p>
        </div>
      </div>

      <div class="frameimgarticle">
        <div class="frameimgarticle4">
          <img alt="" />
          <p> Gala awards outstanding individuals.</p>
        </div>
      </div>
    </div>

    <div class="framequestionmain">
      <div class="frametitle">
        <div class="detailtitle">
          BTaskee is currently the
          <span class="detailtitlered">&nbsp;first place&nbsp;</span> in
          Vietnam to&nbsp;
          <span class="detailtitlered">grant a degree</span>&nbsp;
          <span>
            in housework to demonstrate their ability and attitude to work.
          </span>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          Future plans
          <span>&nbsp;for bTaskee?</span>
        </div>
        <div class="articlequestion">
          <p>
            - In Vietnam, bTaskee will continue to grow rapidly and remain
            at the top of the customer's mind. We're planning to open new
            services such as Senior Care and Child Care, which are two
            services that are in great demand from customers. I'm confident
            that customers will be satisfied with BTASK.e has devoted a lot
          </p>
          of time and effort to implement these features.
          <p>
            - In Thailand, bTaskee is expected to take the lead in the
            market by the end of 2022 or at the latest in the first quarter
            of 2023.
          </p>
          <p>
            - bTaskee's goal is to have apps in six major Southeast Asian
            countries by the end of 2024. Btaskee is always looking for and
            expecting people with the will, energy, and passion to
            participate in this project on the road to conquering Southeast
            Asia.
          </p>
        </div>
      </div>
      <div class="framequestiontitle">
        <div class="questiontitle">
          What
          <span>&nbsp;advice do you have for young people&nbsp;</span>
          preparing to start a business?
        </div>
        <div class="articlequestion">
          <p>
            Don't expect too much! You have to dare to confront, dare to
            trade, and be prepared to accept that your start-up may fail to
            deliver valuable experiences on the next path. This gate is
            closed to open other gates that are vast, wide and full of
            color.Grow up and grow up.
          </p>
          <p>
            The second thing is to set the goal of the project, never set
            the goal of the business as sales, because it is only the final
            result. The goals are the actual value of the product, what
            benefits the customer, what benefits society. If we set the
            money right,If you get them and you get them, the results will
            come.
          </p>
          <p>
            The path to see and when you actually walk is very different, so
            you need to develop your endurance and willpower. Some people
            just come back halfway, and they don't know what's waiting for
            them at the end of the road, and one thing is obvious. The
            winner is not the best, but the one who doesn't give up to get
            to the finish line.
          </p>
        </div>
      </div>
    </div>
  </div>`;
  return (
    <Box>
      {/* GET CONTENT FROM API */}
      {Object.keys(detailArticle).length != 0 && (
        <div
          className="framearticle"
          dangerouslySetInnerHTML={{ __html: detailArticle.acf.content }}
        />
      )}

      <Box className="framenew">
        <Box className="framenewtitle">
          <span>
            New <span style={{ color: "#DB2F33" }}>.</span>
          </span>
          <span className="viewtitle">view more</span>
        </Box>
        <Box className="framedetailnewmain">
          <Box className="framedetail">
            <Box className="frameimgnew">
              <img src={isMatch ? new1mb : new1} alt="" />
            </Box>
            <Box>Category</Box>
            <Box>What happens when AI and NFT meets? </Box>
            <Box>
              Sub text max 2 line sub text goes here and sub text goes here and
              sub text goes hereSub text max 2 line sub text goes here and sub
              text goes here and sub text goes here
            </Box>
          </Box>
          <Box className="framedetail">
            <Box className="frameimgnew">
              <img src={isMatch ? new2mb : new2} alt="" />
            </Box>
            <Box>Category</Box>
            <Box>
              Title max 2 lines Title max 2 linesTitle max 2 linesTitle max 2
              linesTitle max 2 lines{" "}
            </Box>
            <Box>
              Sub text max 2 line sub text goes here and sub text here and sub
              text goes hereSub text max 2 line sub text here and sub text goes
              here and sub text goes here
            </Box>
          </Box>
          <Box className="framedetail">
            <Box className="frameimgnew">
              <img src={isMatch ? new3mb : new3} alt="" />
            </Box>
            <Box>Category</Box>
            <Box>What happens when AI and NFT meets? </Box>
            <Box>
              Sub text max 2 line sub text goes here and sub text goes here and
              sub text goes hereSub text max 2 line sub text goes here and sub
              text goes here and sub text goes here
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InterviewBody;
