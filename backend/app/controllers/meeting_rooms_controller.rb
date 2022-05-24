class MeetingRoomsController < ApplicationController
  before_action :set_meeting_room, only: %i[ show update destroy ]

  def index
    @meeting_rooms = MeetingRoom.all
    render json: @meeting_rooms, include: [ :packages ]
  end

  def show
    render json: @meeting_room, include: [ :packages ]
  end

  def create
    @meeting_room = MeetingRoom.new(meeting_room_params)

    if @meeting_room.save
      render json: @meeting_room
    else
      render json: @meeting_room.errors, status: :unprocessable_entity
    end
  end

  def update
    if @meeting_room.update(meeting_room_params)
      render json: @meeting_room
    else
      render json: @meeting_room.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @meeting_room.destroy
  end

  private
    def set_meeting_room
      @meeting_room = MeetingRoom.find(params[:id])
    end

    def meeting_room_params
      params.require(:meeting_room).permit(:name, :price, :people, :table, :status)
    end
end
