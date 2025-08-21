/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <nav style={{ maxWidth: '60%' }}>
          <ul>
            <li>
                상호명: 이내코리아<br />
                대표: 임성준<br />
                연락처: 010-2315-9379 | enae.korea@gmail.com<br />
                본사: 충청남도 아산시 선문로221번길70 선문대학교 산학협력관 416호<br />
                사업자등록번호: 329-03-02915<br />
                통신판매업신고: 2023-충남천안-1333
            </li>
          </ul>
        </nav>
            <img
              alt="..."
              style={{ width: '112px', height: '30px' }}
              src="./footer.png"
            ></img>
      </Container>
    </footer>
  );
}

export default DarkFooter;
