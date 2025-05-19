export interface VarianteResponse {
  id:          number;
    name:        string;
    description: string;
    isActive:    boolean;
    business:    Business;
    created_at:  Date;
    updated_at:  null;
}
export interface Business {
  id: number;
}
