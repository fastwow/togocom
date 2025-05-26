import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ShortCode = ({ code }) => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        borderRadius: 2,
        boxShadow: 4,
        height: 48,
        // align items in center
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 6,
          paddingRight: 6,
        }}
      >
        {code}
      </Box>
    </Box>
  );
};

const Logo = () => {
  return (
    <Box
      sx={{
        width: 64,
        height: 64,
        // backgroundColor: "white",
        borderRadius: 16,
        // boxShadow: 4,
        padding: 2,
      }}
    >
      <img
        src="/logo192.png"
        alt="logo"
        width="64"
        height="64"
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

const PrizeInfo = ({
  onStart,
  prizes,
  date,
  dates,
  isPending,
  type,
  onChangeType,
  onChangeDate,
}) => {
  const onChangeSelectType = React.useCallback(
    (event) => {
      onChangeType(event.target.value);
    },
    [onChangeType]
  );

  const onChangeSelectDate = React.useCallback(
    (event) => {
      onChangeDate(event.target.value);
    },
    [onChangeDate]
  );

  return (
    <Box
      sx={{
        padding: 2,
        marginTop: 16,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {prizes && prizes.length ? (
        <>
          <Box
            sx={{
              fontSize: 36,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              lineHeight: "64px",
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            Bienvenue au jeu EduQuiz!
          </Box>
          <Box
            sx={{
              fontSize: 48,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              lineHeight: "64px",
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            EduQuiz!
          </Box>
          <Box
            sx={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              lineHeight: "64px",
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            Lots:
          </Box>
          {prizes.map((prize, index) => (
            <Box
              sx={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                lineHeight: "64px",
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              {prize.title}
            </Box>
          ))}
          <Box
            sx={{
              // align content to center
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <Button
              variant="outlined"
              onClick={onStart}
              sx={{
                color: isPending ? "white" : "black",
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: isPending ? "red" : "white",
                borderColor: "red",
                disabled: isPending,
                borderWidth: 3,
                borderRadius: 3,
                fontSize: 24,
                // bold
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "red",
                  color: "white",
                  borderColor: "red",
                  borderWidth: 3,
                  borderRadius: 3,
                  boxShadow: "none",
                },
              }}
            >
              Commencer
            </Button>
          </Box>
        </>
      ) : (
        <Box
          // full screen and center
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: 48,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              lineHeight: "64px",
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            Pas de données
          </Box>
        </Box>
      )}
      {isPending ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 4,
            // add spacing between items
            gap: 1,
            // add wave effect to children. first becomer bigger, that second item become bigger and first smaller. and so on. from left item to right item. infinite animatin. apply to all children
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 42,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              // wave effect in loop. 1 second delay after every loop
              animation: "wave 1s infinite 25ms",
              // add duration 100ms to wave effect
              // keyframes for wave effect
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              // add wave effect to this item with delay 200 ms
              animation: "wave 1s infinite 200ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              animation: "wave 1s infinite 375ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              animation: "wave 1s infinite 550ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              animation: "wave 1s infinite 725ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
        </Box>
      ) : undefined}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              color="error"
              label=""
              // change text color to red
              sx={{
                color: "white",
                backgroundColor: "red",
                // add border color to red
                borderColor: "red",
                // add border width to 2
                borderWidth: 2,
                // add border style to solid
                borderStyle: "solid",
                // add box shadow
                boxShadow: 4,
                textTransform: "uppercase",
                // change font size to 24
                // bold text
                fontWeight: "bold",
                borderRadius: 3,
                // hover effect
                "&:hover": {
                  backgroundColor: "red",
                  color: "white",
                  borderColor: "red",
                },
              }}
              onChange={onChangeSelectType}
            >
              <MenuItem value={"daily"}>Quotidien</MenuItem>
              <MenuItem value={"weekly"}>Hebdomadaire</MenuItem>
              <MenuItem value={"super"}>Grand</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {dates ? (
          <Box sx={{ width: 160, marginLeft: 20 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                color="error"
                // change text color to red
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  // add border color to red
                  borderColor: "red",
                  // add border width to 2
                  borderWidth: 2,
                  // add border style to solid
                  borderStyle: "solid",
                  // add box shadow
                  boxShadow: 4,
                  textTransform: "uppercase",
                  // change font size to 24
                  // bold text
                  fontWeight: "bold",
                  borderRadius: 3,
                  // hover effect
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                    borderColor: "red",
                  },
                }}
                onChange={onChangeSelectDate}
              >
                {dates.map((date) => (
                  <MenuItem value={date}>{date}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : undefined}
      </Box>
    </Box>
  );
};

const Start = ({
  onStart,
  prizes,
  shortCode,
  dates,
  type,
  date,
  onChangeType,
  onChangeDate,
}) => {
  const [isPending, setIsPending] = React.useState(false);
  React.useEffect(() => {
    if (isPending) {
      const timeout = setTimeout(() => {
        console.log("Draw completed");
        onStart();
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isPending, onStart]);

  const onStartClick = React.useCallback(() => {
    setIsPending(true);
  }, []);

  return (
    <Box
      sx={{
        // full screen
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        overflowY: "auto"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 24,
          left: 24,
          top: 24,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>{shortCode ? <ShortCode code={shortCode} /> : undefined}</Box>
        <Logo />
      </Box>
      <Box
        sx={{
          position: "absolute",
          // center top
          top: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PrizeInfo
          onStart={onStartClick}
          prizes={prizes}
          isPending={isPending}
          type={type}
          onChangeType={onChangeType}
          onChangeDate={onChangeDate}
          date={date}
          dates={dates}
        />
      </Box>
    </Box>
  );
};

export default Start;
