using System.Linq.Expressions;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

List<Governor> governors = new List<Governor>
{
    new Governor
    {
        Id = 1,
        Name = "Korthis Drell",
        Active = true,
        Colonyid = 2,
    },
    new Governor
    {
        Id = 2,
        Name = "Omrin Celarion",
        Active = true,
        Colonyid = 1,
    },
    new Governor
    {
        Id = 3,
        Name = "Elaris Vortane",
        Active = true,
        Colonyid = 5,
    },
    new Governor
    {
        Id = 4,
        Name = "Xylander Arctron",
        Active = true,
        Colonyid = 3,
    },
    new Governor
    {
        Id = 5,
        Name = "Cyran Durnoss",
        Active = true,
        Colonyid = 4,
    },
};

List<Facility> facilities = new List<Facility>
{
    new Facility { Id = 1, Name = "Polaris " },
    new Facility { Id = 2, Name = "Nexarion " },
    new Facility { Id = 3, Name = "Krytharite" },
    new Facility { Id = 4, Name = "Ironreach" },
    new Facility { Id = 5, Name = "Cerulean" },
};

List<Colony> colonies = new List<Colony>
{
    new Colony { Id = 1, Name = "Erythraea" },
    new Colony { Id = 2, Name = "Zenithia" },
    new Colony { Id = 3, Name = "Syruna" },
    new Colony { Id = 4, Name = "Sanctum" },
    new Colony { Id = 5, Name = "Haven" },
};

List<Mineral> minerals = new List<Mineral>
{
    new Mineral { Id = 1, Name = "Oblivium" },
    new Mineral { Id = 2, Name = "Novacite" },
    new Mineral { Id = 3, Name = "Zeronthal" },
    new Mineral { Id = 4, Name = "Stellarite" },
    new Mineral { Id = 5, Name = "Astracite" },
};

List<ColonyInventory> colonyInventories = new List<ColonyInventory>
{
    new ColonyInventory
    {
        Id = 1,
        ColonyId = 1,
        MineralId = 2,
        MineralQuantity = 2300,
    },
    new ColonyInventory
    {
        Id = 2,
        ColonyId = 3,
        MineralId = 4,
        MineralQuantity = 2100,
    },
    new ColonyInventory
    {
        Id = 3,
        ColonyId = 4,
        MineralId = 5,
        MineralQuantity = 2200,
    },
    new ColonyInventory
    {
        Id = 4,
        ColonyId = 1,
        MineralId = 4,
        MineralQuantity = 2350,
    },
};

List<FacilityInventory> facilityInventories = new List<FacilityInventory>
{
    new FacilityInventory
    {
        Id = 1,
        FacilityId = 1,
        MineralId = 3,
        MineralQuantity = 6500,
    },
    new FacilityInventory
    {
        Id = 2,
        FacilityId = 3,
        MineralId = 5,
        MineralQuantity = 5000,
    },
    new FacilityInventory
    {
        Id = 3,
        FacilityId = 3,
        MineralId = 1,
        MineralQuantity = 7000,
    },
    new FacilityInventory
    {
        Id = 4,
        FacilityId = 4,
        MineralId = 2,
        MineralQuantity = 6700,
    },
    new FacilityInventory
    {
        Id = 5,
        FacilityId = 2,
        MineralId = 3,
        MineralQuantity = 6600,
    },
};

//Endpoint for all governors
app.MapGet(
    "/api/governors",
    () =>
    {
        return governors.Select(c => new GovernorDTO
        {
            Id = c.Id,
            Name = c.Name,
            Active = c.Active,
            Colonyid = c.Colonyid,
        });
    }
);

//Endpoint for all Facilities
app.MapGet(
    "/api/facilities",
    () =>
    {
        var facilityList = facilities.Select(f => new FacilityDTO { Id = f.Id, Name = f.Name });
        return facilityList;
    }
);

//Endpoint for all Facility Mineral
app.MapGet(
    "/api/facilityInventories",
    () =>
    {
        var facilityInventoryList = facilityInventories.Select(i => new FacilityInventoryDTO
        {
            Id = i.Id,
            FacilityId = i.FacilityId,
            Facility = facilities
                .Where(f => f.Id == i.FacilityId)
                .Select(f => new FacilityDTO { Id = f.Id, Name = f.Name })
                .FirstOrDefault(),
            MineralId = i.MineralId,
            Mineral = minerals
                .Where(m => m.Id == i.MineralId)
                .Select(m => new MineralDTO { Id = m.Id, Name = m.Name })
                .FirstOrDefault(),
            MineralQuantity = i.MineralQuantity,
        });
        return facilityInventoryList;
    }
);

//Endpoint for governor by id
app.MapGet(
    "/api/governors/{id}",
    (int id) =>
    {
        try
        {
            Governor foundGovernor = governors.First(g => g.Id == id);
            return Results.Ok(
                new GovernorDTO
                {
                    Id = foundGovernor.Id,
                    Name = foundGovernor.Name,
                    Active = foundGovernor.Active,
                    Colonyid = foundGovernor.Colonyid,
                }
            );
        }
        catch
        {
            return Results.NotFound();
        }
    }
);

//Endpoint to get colony by id
app.MapGet(
    "/api/colonies/{id}",
    (int id) =>
    {
        try
        {
            Colony colony = colonies.First((c) => c.Id == id);
            return Results.Ok(new ColonyDTO { Id = colony.Id, Name = colony.Name });
        }
        catch
        {
            return Results.NotFound();
        }
    }
);

app.MapGet(
    "/api/colonyinventory/{id}",
    (int id) =>
    {
        try
        {
            List<ColonyInventory> foundColonyInventory = colonyInventories
                .Where((ci) => ci.ColonyId == id)
                .ToList();
            return Results.Ok(
                foundColonyInventory.Select(ci =>
                {
                    Mineral foundMineral = minerals.First(m => m.Id == ci.Id);
                    return new ColonyInventoryDTO
                    {
                        Id = ci.Id,
                        ColonyId = ci.ColonyId,
                        MineralId = ci.MineralId,
                        Mineral = new MineralDTO { Id = foundMineral.Id, Name = foundMineral.Name },
                        MineralQuantity = ci.MineralQuantity,
                    };
                })
            );
        }
        catch
        {
            return Results.NotFound();
        }
    }
);

app.Run();
