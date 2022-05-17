class RoomtypesController < ApplicationController
  before_action :set_roomtype, only: %i[ show update destroy ]

  # GET /roomtypes
  def index
    @roomtypes = Roomtype.all

    render json: @roomtypes
  end

  # GET /roomtypes/1
  def show
    render json: @roomtype
  end

  # POST /roomtypes
  def create
    @roomtype = Roomtype.new(roomtype_params)

    if @roomtype.save
      render json: @roomtype, status: :created, location: @roomtype
    else
      render json: @roomtype.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /roomtypes/1
  def update
    if @roomtype.update(roomtype_params)
      render json: @roomtype
    else
      render json: @roomtype.errors, status: :unprocessable_entity
    end
  end

  # DELETE /roomtypes/1
  def destroy
    @roomtype.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_roomtype
      @roomtype = Roomtype.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def roomtype_params
      params.require(:roomtype).permit(:name)
    end
end
