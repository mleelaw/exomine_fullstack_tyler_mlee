public class Order
{
    public int Id { get; set; }

    public int Quantity { get; }

    // Constructor
    public Order(int quantity)
    {
        Quantity = quantity;
    }

    public List<FacilityInventory> facilityInventories { get; set; } =
        new List<FacilityInventory>();
    public List<Mineral> minerals => facilityInventories.Select(fi => fi.Mineral).ToList();
}
