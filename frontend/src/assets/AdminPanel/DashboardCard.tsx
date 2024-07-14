import React from 'react';

interface DashboardCard {
  totalBorrowedBooks: number;
  cardHead: string;
  className ?: string;
}

const DashboardCard: React.FC<DashboardCard> = ({ totalBorrowedBooks, cardHead , className }) => {
  return (
    <div className={className}>
      <div className="">
        <div className="card bg-black text-white">
          <div className="card-body w-100">
            <h5 className="card-title">{cardHead}</h5>
            <p className="card-text fs-5">{totalBorrowedBooks}</p>
          </div>
        </div>
      </div >
    </div>
      );
};

      export default DashboardCard;
