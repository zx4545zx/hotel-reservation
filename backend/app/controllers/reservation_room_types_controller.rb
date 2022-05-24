class ReservationRoomTypesController < ApplicationController
  before_action :set_reservation_room_type, only: %i[ show update destroy ]

  # GET /reservation_room_types
  def index
    @reservation_room_types = ReservationRoomType.all

    render json: @reservation_room_types
  end

  # GET /reservation_room_types/1
  def show
    render json: @reservation_room_type
  end

  # POST /reservation_room_types
  def create
    @reservation_room_type = ReservationRoomType.new(reservation_room_type_params)

    if @reservation_room_type.save
      render json: @reservation_room_type, status: :created, location: @reservation_room_type
    else
      render json: @reservation_room_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_room_types/1
  def update
    if @reservation_room_type.update(reservation_room_type_params)
      render json: @reservation_room_type
    else
      render json: @reservation_room_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_room_types/1
  def destroy
    @reservation_room_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_room_type
      @reservation_room_type = ReservationRoomType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_room_type_params
      params.require(:reservation_room_type).permit(:reservation_id, :roomtype_id)
    end
end
