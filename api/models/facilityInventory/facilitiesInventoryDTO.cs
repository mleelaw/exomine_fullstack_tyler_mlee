public class FacilityInventoryDTO
{
    public int Id { get; set; }
    public int FacilityId { get; set; }
    public FacilityDTO Facility { get; set; }
    public int MineralId { get; set; }
    public MineralDTO Mineral { get; set; }
    public int MineralQuantity { get; set; }
}
