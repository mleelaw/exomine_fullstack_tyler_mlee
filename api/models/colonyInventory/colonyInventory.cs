public class ColonyInventoryDTO
{
    public int Id { get; set; }
    public int ColonyId { get; set; }
    public int MineralId { get; set; }
    public Mineral Mineral { get; set; }
    public int MineralQuantity { get; set; }
}
