import React, { useState } from "react";
import Container from "components/aboutUs/Container";
import styled, { css } from "styled-components";
import photo1 from "../assets/1965773.png";

const AboutUs = () => {
  const [showFullDetails, setShowFullDetails] = useState(0);

  const aboutUsTitle1 = {
    title: "პროექტის შესახებ",
    shortTxt:
      "CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს შესაძლებლობა ექნება განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში...",
    text: "CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს\
    შესაძლებლობა ექნება განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში. პროექტის მიზანია შესაძლებლობა მისცეს,\
    ადამიანებს განვითარდნენ, განავითარონ ყველა დეველოპერული უნარები, როგორიცაა კოდირება, გუნდური მუშაობა, კომუნიკაბელურობა და სხვა.",
  };
  const aboutUsTitle2 = {
    title: "პროექტის მიზანი",
    shortTxt:
      "CoWorkSpaceში დასაწყისისთვის გვექნება Discord სერვერი, სადაც ადამიანები შემოვლენ გაივლიან მარტივ გამოცდას და შემდეგ მათ მიენიჭებათ დონეები (Level 1დან Level 10_მდე). გამოცდის ჩაბარების შემდეგ ყველა გამოცდილ თუ ...",
    text: "CoWorkSpaceში დასაწყისისთვის გვექნება Discord სერვერი, სადაც ადამიანები შემოვლენ გაივლიან მარტივ გამოცდას და შემდეგ მათ\
    მიენიჭებათ დონეები (Level 1დან Level 10_მდე). გამოცდის ჩაბარების შემდეგ ყველა გამოცდილ თუ გამოუცდელ დეველოპერს მიენიჭება level 1,\
    დონეები გაიზრდება შესრულებული გუნდური პროექტებიდან გამომდინარე. დონეებთან ერთად გაიზრდება დავალებების სირთულეც, ხოლო, როდესაც\
    გუნდი მიაღწევს Level 10 ჩვენ ვეცდებით მოვიტანოთ თქვენამდე რეალური პროექტები, რომლებიც იქნებიან ანაზღაურებადი, რაც შესაძლებელს გახდის \
    ჩვენს მომავალ თანამშრომლობას. ვფიქრობთ, რომ ჩვენი მიდგომა ადამიანებს მისცემთ მოტივაციის, ცოდნის და ახალი ადამიანების გაცნობის საშუალებას,\
    როგორც თქვენ ეტაპობრივად ჩვენც ვეცდებით განვითარდეთ და დავამატოთ სხვადასხვა პროფესიული გარემოებები, რაც ტექნოლოგიებს უკავშირდება.",
  };
  const aboutUsTitle3 = {
    title: "მუშაობის პროცესი",
    shortTxt:
      "შემადგენლობა: გუნდების შემადგენლობა შესაძლებელია შემდეგნაირად: ვარიანტი 1(Front-end Developer, Back-end Developer) ვარიანტი 2(Front-end Developer, Back-end Developer და Full-stack Developer) ვარიანტი ...",
    text: "შემადგენლობა: \
    გუნდების შემადგენლობა შესაძლებელია შემდეგნაირად:\
    ვარიანტი 1(Front-end Developer, Back-end Developer)\
    ვარიანტი 2(Front-end Developer, Back-end Developer და Full-stack Developer)\
    ვარიანტი 3(მხოლოდ Full-stack Developer) \
    მოვალეობები და მოთხოვნები:\
    Level 1 - Level 2: საწყის დონეზე თქვენი მოვალეობა იქნება შეასრულოთ თქვენთვის მოცემული დავალება.\
    მოთხოვნა იქნება, რომ წეროთ რაც შეიძლება სუფთა კოდი, რომლის შეცვლა/წაშლა იქნება მარტივი, ასევე ყველაფერი უნდა იყოს Pixel Perfect.\
    \
    Level 3 - Level 4: თქვენი მოვალეობაა განაგრძოთ დავალებების კეთება და დონეების გაზრდა, ამასთანავე დაგემატებათ ახალი დავალება,\
    რაც ეხება ქვედა დონეების დახმარებას თუ დავალების გადახედვაში(ეს თქვენ მოგცემთ დამატებით უნარს, რომელსაც გამოიმუშავებთ სხვისი კოდის \
    წაკითხვით და გააზრებით. level 3 გუნდი ჩაიბარებს level 1 ის გუნდს ხოლო Level 4 ჩაიბარებს Level 2ის გუნდს და დაეხამებით განვითარებაში)\
    .\
    Level 5 - Level 6: თქვენი მოვალეობაა განაგრძოთ დავალებების კეთება და დონეების გაზრდა, რაც შეეხება ქვედა დონეების დახმარებას? \
    თქვენ ჩაიბარებთ level 5 გუნდი ჩაიბარებს level 3ის გუნდს ხოლო Level6 ჩაიბარებს Level 4ის გუნდს და დაეხამებით განვითარებაში). ასევე\
    თქვენ არ ხართ ვალდებული დაეხმაროთ level 1 და level 2, მაგრამ თუ დაეხმარებით არაფერი არ დაშავდება და მოტივაცია იქნება მათთვისაც, რომ \
    თქვენამდე მოვიდნენ.",
  };
  const aboutUsTitle4 = {
    title: "პროექტის მოტხოვნები",
    shortTxt:
      "აუცილებელია იყოთ ჯუნიორის დონის (Front-end (Javascript, React, Git), Back-End(Javascript, Node.js, Database, Git)...\
      და Full-stack(Javascript, React, Node.js, DataBase, Git) დამატებით თქვენ თუ მეტი frameWork_ები იცით ეს უკვე თქვენი პლიუსია)...",
    text: "აუცილებელია იყოთ ჯუნიორის დონის (Front-end (Javascript, React, Git), Back-End(Javascript, Node.js, Database, Git)\
    და Full-stack(Javascript, React, Node.js, DataBase, Git) დამატებით თქვენ თუ მეტი frameWork_ები იცით ეს უკვე თქვენი პლიუსია)...",
  };

  return (
    <div>
      <AboutUsCss>
        <Container
          photo={photo1}
          text={aboutUsTitle1}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
          num={1}
        />
        <Container
          photo={photo1}
          text={aboutUsTitle2}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
          num={2}
        />
        <Container
          photo={photo1}
          text={aboutUsTitle3}
          num={3}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
        />
        <Container
          photo={photo1}
          text={aboutUsTitle4}
          num={4}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
        />
      </AboutUsCss>
    </div>
  );
};

export default AboutUs;

const AboutUsCss = styled.div(
  () => css`
    padding: 0 150px;
    display: flex;
    justify-content: space-evenly;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 56px;
    @media (max-width: 1380px) {
      gap: 60px;
    }
    @media (max-width: 1230px) {
      gap: 40px;
    }
    @media (max-width: 745px) {
      min-height: 200vh;
    }
  `
);
