public class FacilityInventoryDTO
{
    public int Id { get; set; }
    public int FacilityId { get; set; }
    public Facility Facility { get; set; }
    public int MineralsId { get; set; }
    public Mineral Minerals { get; set; }
    public int MineralQuantity { get; set; }
}
