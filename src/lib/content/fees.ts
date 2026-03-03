export type FeeCategory = {
  name: string;
  fees: FeeItem[];
};

export type FeeItem = {
  name: string;
  gold: string;
  platinum: string;
  black: string;
  purple: string;
  tooltip?: string;
};

export const FEE_SCHEDULE: FeeCategory[] = [
  {
    name: "Monthly Account Fees",
    fees: [
      {
        name: "Full Banking Suite",
        gold: "R115",
        platinum: "R170",
        black: "R295",
        purple: "R495",
        tooltip:
          "Includes transaction account, credit card, and Vitality Money. Up to 75% discount at Diamond status.",
      },
      {
        name: "Transaction Account (bundled)",
        gold: "R85",
        platinum: "R120",
        black: "R195",
        purple: "R350",
        tooltip:
          "Transaction account only with bundled transactions included.",
      },
      {
        name: "Credit Card Account",
        gold: "R50",
        platinum: "R70",
        black: "R100",
        purple: "R145",
      },
    ],
  },
  {
    name: "Transaction Fees",
    fees: [
      {
        name: "Card swipe / tap",
        gold: "R1.30",
        platinum: "R1.30",
        black: "R1.30",
        purple: "R1.30",
        tooltip: "Free if on a bundled account with included transactions.",
      },
      {
        name: "Online / app transfer",
        gold: "R4.50",
        platinum: "R4.50",
        black: "R4.50",
        purple: "R4.50",
      },
      {
        name: "Debit order",
        gold: "R4.00",
        platinum: "R4.00",
        black: "R4.00",
        purple: "R4.00",
      },
      {
        name: "PayShap payment",
        gold: "Up to R12",
        platinum: "Up to R12",
        black: "Up to R12",
        purple: "Up to R12",
        tooltip: "0.4% of amounts above R1,500.",
      },
    ],
  },
  {
    name: "ATM Fees",
    fees: [
      {
        name: "Own ATM withdrawal",
        gold: "R4.00",
        platinum: "R5.50",
        black: "R7.00",
        purple: "R8.50",
      },
      {
        name: "Other bank ATM withdrawal",
        gold: "R10.00",
        platinum: "R10.00",
        black: "R10.00",
        purple: "R10.00",
      },
      {
        name: "Balance enquiry (own ATM)",
        gold: "R0.00",
        platinum: "R0.00",
        black: "R0.00",
        purple: "R0.00",
      },
    ],
  },
  {
    name: "International Fees",
    fees: [
      {
        name: "International card transaction",
        gold: "3.5%",
        platinum: "3.5%",
        black: "3.5%",
        purple: "3.5%",
        tooltip: "Percentage of the transaction amount in foreign currency.",
      },
      {
        name: "International ATM withdrawal",
        gold: "R65",
        platinum: "R65",
        black: "R65",
        purple: "R65",
      },
    ],
  },
];
