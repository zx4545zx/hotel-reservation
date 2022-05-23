class ReservationMeetingRoomsController < ApplicationController
  before_action :set_reservation_meeting_room, only: %i[ show update destroy ]

  # GET /reservation_meeting_rooms
  def index
    @reservation_meeting_rooms = ReservationMeetingRoom.all

    render json: @reservation_meeting_rooms
  end

  # GET /reservation_meeting_rooms/1
  def show
    render json: @reservation_meeting_room
  end

  # POST /reservation_meeting_rooms
  def create
    @reservation_meeting_room = ReservationMeetingRoom.new(reservation_meeting_room_params)

    if @reservation_meeting_room.save
      render json: @reservation_meeting_room, status: :created, location: @reservation_meeting_room
    else
      render json: @reservation_meeting_room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_meeting_rooms/1
  def update
    if @reservation_meeting_room.update(reservation_meeting_room_params)
      render json: @reservation_meeting_room
    else
      render json: @reservation_meeting_room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_meeting_rooms/1
  def destroy
    @reservation_meeting_room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_meeting_room
      @reservation_meeting_room = ReservationMeetingRoom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_meeting_room_params
      params.require(:reservation_meeting_room).permit(:reservation_id, :meeting_room_id)
    end
end
