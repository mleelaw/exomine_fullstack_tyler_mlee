var builder = WebApplication.CreateBuilder(args);

List<Governor> governors = new List<Governor>
{
    new Governor {
        Id = 1,
        Name = "Korthis Drell"
    },
      new Governor {
        Id = 2,
        Name = "Omrin Celarion"
    }
    ,
    new Governor {
        Id = 3,
        Name = "Elaris Vortane"
    },
      new Governor {
        Id = 4,
        Name = "Xylander Arctron"
    },
      new Governor {
        Id = 5,
        Name = "Cyran Durnoss"
    }
}

List<Facility> facilities = new List<Facility>      
    new Facility {
        Id = 1,
        Name = "Polaris "
    },
      new Facility {
        Id = 2,
        Name = "Nexarion "
    }
    ,
    new Facility {
        Id = 3,
        Name = "Krytharite"
    },
      new Facility {
        Id = 4,
        Name = "Ironreach"
    },
      new Facility {
        Id = 5,
        Name = "Cerulean"
    }

List<Colony> colonies = new List<Colony>
    new Colony {
        Id = 1,
        Name = "Erythraea"
    },
      new Colony {
        Id = 2,
        Name = "Zenithia"
    }
    ,
    new Colony {
        Id = 3,
        Name = "Syruna"
    },
      new Colony {
        Id = 4,
        Name = "Sanctum"
    },
      new Colony {
        Id = 5,
        Name = "Haven"
    }


List<Mineral> minerals = new List<Mineral>
    new Mineral {
        Id = 1,
        Name = "Oblivium",
        
    },
      new Mineral {
        Id = 2,
        Name = "Novacite",
        
    }
    ,
    new Mineral {
        Id = 3,
        Name = "Zeronthal",
        
    },
      new Mineral {
        Id = 4,
        Name = "Stellarite",
        
    },
      new Mineral {
        Id = 5,
        Name = "Astracite",
        
    }

List<ColonyInventory> colonyInventories = new List<ColonyInventory>
    new ColonyInventory {
        Id = 1,
        ColonyId = 1,
        MineralId = 2,
        MineralQuantity = 2300
    },
      new ColonyInventory {
        Id = 2,
        ColonyId = 3,
        MineralId = 4,
        MineralQuantity = 2100
    },
    new MineColonyInventory{
        Id = 3,
         ColonyId = 4,
         MineralId = 5,
         MineralQuantity = 2200
    },
    new ColonyInventory {
        Id = 4,
        ColonyId = 1,
        MineralId = 4,
        MineralQuantity = 2350
    },

List<FacilityInventory> facilityInventories = new List<FacilityInventory>
    new FacilityInventory {
        Id = 1,
        FacilityId = 1,
        MineralId = 3,
        MineralQuantity = 6500
    },
      new FacilityInventory {
        Id = 2,
        FacilityId = 2,
        MineralId = 5
        MineralQuantity = 5000
    },
    new FacilityInventory{
        Id = 3,
         FacilityId = 3,
         MineralId = 1,
         MineralQuantity = 7000
    },
    new FacilityInventory {
        Id = 4,
        FacilityId = 4,
        MineralId = 2,
        MineralQuantity = 6700
    },

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

app.Run();
