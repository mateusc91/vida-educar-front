// javascipt plugin for creating charts
import Chart from "chart.js";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const PaginaEmConstrucao = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
      <Header />
      {/* Page content */}

        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <div className="text-center">Pagina em Construcao!</div>
          </Col>
          
          <Col xl="4">
           
          </Col>
          
        </Row>
    </>
  );
};

export default PaginaEmConstrucao;
