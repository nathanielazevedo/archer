import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "70px 150px",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "black",
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How much does it cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Check out our pricing page!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What's the range of the device?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Worldwide. Our network can reach you anywhere from anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How long does one charge last?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1-2 days, depending on the weather and how much you use it.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How long does it take to charge?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>One hour, if you use the included charger.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
