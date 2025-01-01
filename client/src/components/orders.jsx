export function SpaceCart({ selectedMineral }) {
    return (
        <div className="card">
            <div className="card-body">
                <h6>Space Cart</h6>
                {selectedMineral && (
                    <div className="card-title">
                      Purchase 1 {selectedMineral.name}?
                    </div>
                )}
            </div>
        </div>
    );
}