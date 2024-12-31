public class FacilityInventory
{
    public int Id { get; set; }
    public int FacilityId { get; set; }
    public Facility Facility { get; set; }
    public int MineralId { get; set; }
    public Mineral Mineral { get; set; }
    public int MineralQuantity { get; set; }
}
