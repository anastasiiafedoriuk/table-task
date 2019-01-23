export interface Item {
  autocorrection: boolean;
  name: string;
  date: string;
  available_tickets: number;
  listing_id: number;
  event_id: number;
  section: string;
  price: number;
  currency: string;
  initial_price: number;
  published: boolean;
  all_sectors: boolean;
  min_price: number;
  max_price: number;
  min_tickets: number;
  deleted: boolean;
  notes: string;
  indent: number;
  notification: boolean;
  all_venues: boolean;
  venue: string;
  ignore_notes: boolean;
}
