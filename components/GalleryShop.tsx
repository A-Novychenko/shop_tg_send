import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";
import {products} from "@/data/dataProducts";
import {BuyBtn} from "./BuyBtn";

export const GalleryShop = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <List
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products &&
            products.map(
              ({
                id,
                name,
                price,
                categoryId,
                rate,
                content,
                review,
                imageUrl,
              }) => {
                return (
                  <ListItem key={id} style={{width: 350}}>
                    <Card sx={{maxWidth: 350}}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={imageUrl}
                          alt={name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {content}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.primary"
                            fontSize={20}
                            fontWeight={700}
                          >
                            {`${price} coins`}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <BuyBtn name={name} price={price} id={id} />
                      </CardActions>
                    </Card>
                  </ListItem>
                );
              }
            )}
        </List>
      </Container>
    </>
  );
};
