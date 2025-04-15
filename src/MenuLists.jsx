import MenuItem from './MenuItem'

function MenuLists(props) {

    return (
        <>
            <div className="menu-list">
                <MenuItem 
                  itemName="Lavender Tea"
                  itemDesc="Locally-imported lavender flowers. Our shop’s specialty."
                  itemPrice={5.00}
                />
                <MenuItem 
                  itemName="Black Tea"
                  itemDesc="Brewed black tea. Best enjoyed alone or with a company."
                  itemPrice={3.75}
                />
                <MenuItem 
                  itemName="Chamomile Tea"
                  itemDesc="A drink perfect for those who want the calm."
                  itemPrice={3.50}
                />
                <MenuItem 
                  itemName="Iced Tea (Apple/Lemon)"
                  itemDesc="Black tea of your chosen flavor refrigerated. Perfect with friends."
                  itemPrice={4.00}
                />
                <MenuItem 
                  itemName="Orange Juice"
                  itemDesc="Freshly squeezed orange juice, simple but refined."
                  itemPrice={3.00}
                />
              </div>

              <div className="menu-list">
                <MenuItem 
                  itemName="Purple Jam Sandwich"
                  itemDesc="House specialty. A fruity mix of sweetness in a toast. 
                    Mysterious, but a welcome treat."
                  itemPrice={8.00}
                />
                <MenuItem 
                  itemName="Bacon Sandwich"
                  itemDesc="Crispy or well-done, with cheese, tomato and lettuce for that quick snack."
                  itemPrice={9.00}
                />
                <MenuItem 
                  itemName="Creamy Spinach Pizza"
                  itemDesc="Baked in-cafe for freshness. A craving you never thought you need."
                  itemPrice={11.75}
                />
                <MenuItem 
                  itemName="Egg Sandwich"
                  itemDesc="Bacon sandwich’s sidekick. Well-done or scrambled, with the usual cheese, tomato and lettuce."
                  itemPrice={5.00}
                />
                <MenuItem 
                  itemName="Bread Toast"
                  itemDesc="Bread toast for those tight on the budget, served with butter or otherwise."
                  itemPrice={1.00}
                />
            </div>
        </>
    )
}

export default MenuLists;
  